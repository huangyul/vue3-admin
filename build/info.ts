import type { Plugin } from "vite"
import dayjs, { type Dayjs } from "dayjs"
import duration from "dayjs/plugin/duration"
import gradientString from "gradient-string"
import boxen, { type Options as BoxenOptions } from "boxen"
import * as fs from "fs"
import * as path from "path"
dayjs.extend(duration)

/**
 * 计算目录的大小
 * @param dirPath 要计算大小的目录路径
 * @returns 目录的总大小（以字节为单位）
 */
export async function getDirectorySize(dirPath: string): Promise<number> {
  // 使用Promise封装异步文件和目录信息
  const stat = (filePath: string) =>
    new Promise<fs.Stats>((resolve, reject) => {
      fs.stat(filePath, (err, stats) => {
        if (err) reject(err)
        else resolve(stats)
      })
    })

  const readdir = (dirPath: string) =>
    new Promise<string[]>((resolve, reject) => {
      fs.readdir(dirPath, (err, files) => {
        if (err) reject(err)
        else resolve(files)
      })
    })

  async function calculateSize(dirPath: string): Promise<number> {
    let totalSize = 0

    // 获取目录内容
    const files = await readdir(dirPath)

    // 遍历目录内容
    for (const file of files) {
      const filePath = path.join(dirPath, file)
      const stats = await stat(filePath)

      if (stats.isDirectory()) {
        // 递归计算子目录的大小
        totalSize += await calculateSize(filePath)
      } else {
        // 计算文件大小
        totalSize += stats.size
      }
    }

    return totalSize
  }

  return await calculateSize(dirPath)
}

const welcomeMessage = gradientString("cyan", "magenta").multiline(
  `您好! 这里是 gin-admin-frontend 项目\n对应的 golang 后端仓库如下\nhttps://pure-admin.github.io/pure-admin-doc\n项目是基于pure-admin进行的二开，感谢pure-admin提供的开源支持`
)

const boxenOptions: BoxenOptions = {
  padding: 0.5,
  borderColor: "cyan",
  borderStyle: "round"
}

export function viteBuildInfo(): Plugin {
  let config: { command: string }
  let startTime: Dayjs
  let endTime: Dayjs
  let outDir: string
  return {
    name: "vite:buildInfo",
    configResolved(resolvedConfig) {
      config = resolvedConfig
      outDir = resolvedConfig.build?.outDir ?? "dist"
    },
    buildStart() {
      console.log(boxen(welcomeMessage, boxenOptions))
      if (config.command === "build") {
        startTime = dayjs(new Date())
      }
    },
    async closeBundle() {
      if (config.command === "build") {
        endTime = dayjs(new Date())
        const size = await getDirectorySize(outDir)
        console.log(
          boxen(
            gradientString("cyan", "magenta").multiline(
              `🎉 恭喜打包完成（总用时${dayjs
                .duration(endTime.diff(startTime))
                .format("mm分ss秒")}），打包后的大小为 ${(size / 1024 / 1024).toFixed(2)} MB`
            ),
            boxenOptions
          )
        )
      }
    }
  }
}
