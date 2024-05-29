# monorepo 使用基本技巧

## 在根目录下安装依赖

`pnpm -w add vue`

## 在子包安装依赖

`pnpm add vue --filter ./apps/admin`

## 在子包中依赖其他子包

`pnpm add utils --workspace --filter ./apps/admin`
