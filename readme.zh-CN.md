# Ruts

[![Rust](https://img.shields.io/badge/Rust-1.88.0-blue.svg)](https://www.rust-lang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Cargo](https://img.shields.io/crates/v/ruts.svg)](https://crates.io/crates/ruts)

一个使用 [cargo-workspaces](https://github.com/pksunkara/cargo-workspaces) 管理的现代 Rust 工作空间项目，用于高效的多 crate 开发。

## 🚀 特性

- **工作空间管理**: 在单个工作空间中高效管理多个 Rust crate
- **代码质量**: 内置 `rustfmt` 和 `clippy` 格式化和代码检查
- **现代工具链**: 使用最新的 Rust 工具链和最佳实践
- **跨平台**: 支持 Windows、macOS 和 Linux

## 📋 前置要求

- **Rust**: 最新稳定版本（推荐 1.88.0+）
- **cargo-workspaces**: 用于工作空间管理

## 🛠️ 安装

### 安装 Rust

如果还没有安装 Rust，请访问 [rustup.rs](https://rustup.rs/) 或运行：

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### 安装 cargo-workspaces

```bash
cargo install cargo-workspaces
```

> **注意**: 本项目使用 cargo-workspaces 的分支版本：https://github.com/chaxus/cargo-workspaces

## 🏗️ 工作空间管理

### 初始化工作空间

```bash
cargo workspaces init
```

### 创建新项目

```bash
cargo workspaces create --name <项目名称>
```

### 列出所有项目

```bash
cargo workspaces list
```

### 获取帮助

```bash
cargo ws --help
```

## 🎨 代码风格

本项目遵循 Rust 格式化标准，使用 `rustfmt` 和自定义配置（定义在 `.rustfmt.toml` 中）。

### 格式化命令

#### 格式化单个文件
```bash
rustfmt src/main.rs
```

#### 格式化整个项目
```bash
# 在项目根目录运行
cargo fmt
```

#### 格式化特定目录
```bash
rustfmt src/
```

#### 检查格式化而不修改
```bash
cargo fmt -- --check
```

#### 使用特定选项格式化
```bash
# 详细输出格式化
cargo fmt --verbose

# 格式化特定文件
cargo fmt -- src/lib.rs src/main.rs
```

### 代码检查

运行 Clippy 进行额外的代码质量检查：

```bash
# 运行 Clippy
cargo clippy

# 运行 Clippy 并显示所有警告
cargo clippy -- -W clippy::all

# 运行 Clippy 并进行特定检查
cargo clippy -- -D clippy::pedantic
```

## 📁 项目结构

```
ruts/
├── Cargo.toml          # 工作空间配置
├── .rustfmt.toml       # Rust 格式化配置
├── .gitignore          # Git 忽略规则
├── README.md           # 英文文档
├── readme.zh-CN.md     # 中文文档
├── src/                # 源代码目录
│   ├── main.rs         # 主应用程序入口点
│   └── lib.rs          # 库代码
├── tests/              # 集成测试
├── examples/           # 示例代码
└── docs/               # 文档
```

## 🚀 开发

### 构建

```bash
# 调试模式构建
cargo build

# 发布模式构建
cargo build --release

# 构建特定目标
cargo build --target x86_64-unknown-linux-gnu
```

### 测试

```bash
# 运行所有测试
cargo test

# 运行测试并显示输出
cargo test -- --nocapture

# 运行特定测试
cargo test test_name

# 并行运行测试
cargo test --jobs 4
```

### 运行

```bash
# 调试模式运行
cargo run

# 带参数运行
cargo run -- arg1 arg2

# 发布模式运行
cargo run --release
```

### 文档

```bash
# 生成文档
cargo doc

# 生成并打开文档
cargo doc --open

# 为所有工作空间成员生成文档
cargo workspaces doc
```

## 🔧 配置

### Rustfmt 配置

项目使用自定义 `.rustfmt.toml` 配置：

```toml
# .rustfmt.toml
edition = "2021"
max_width = 100
tab_spaces = 4
newline_style = "Unix"
use_small_heuristics = "Default"
```

### Cargo 配置

`Cargo.toml` 中的工作空间配置：

```toml
[workspace]
members = [
    # 在此处添加你的 crate 名称
]

[workspace.package]
version = "0.1.0"
edition = "2021"
authors = ["你的姓名 <your.email@example.com>"]
description = "一个 Rust 工作空间项目"
license = "MIT"
repository = "https://github.com/yourusername/ruts"
```

## 🤝 贡献

我们欢迎贡献！请按照以下步骤：

1. **Fork** 仓库
2. **创建** 功能分支 (`git checkout -b feature/amazing-feature`)
3. **进行** 你的修改
4. **格式化** 你的代码 (`cargo fmt`)
5. **测试** 你的修改 (`cargo test`)
6. **检查** 你的代码 (`cargo clippy`)
7. **提交** 你的修改 (`git commit -m '添加 amazing 功能'`)
8. **推送** 到分支 (`git push origin feature/amazing-feature`)
9. **打开** 拉取请求

### 开发指南

- 遵循 Rust 命名约定
- 为新功能添加测试
- 根据需要更新文档
- 提交前确保所有测试通过
- 使用有意义的提交信息

## 📝 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- [cargo-workspaces](https://github.com/pksunkara/cargo-workspaces) 用于工作空间管理
- [Rust 社区](https://www.rust-lang.org/community) 提供出色的生态系统

## 📚 额外资源

- [Rust 编程语言](https://doc.rust-lang.org/book/)
- [Rust 参考手册](https://doc.rust-lang.org/reference/)
- [Cargo 手册](https://doc.rust-lang.org/cargo/)
- [Rust 示例](https://doc.rust-lang.org/rust-by-example/)

---

📖 **For English documentation, see [README.md](README.md).**