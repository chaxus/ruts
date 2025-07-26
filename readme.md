# Ruts

[![Rust](https://img.shields.io/badge/Rust-1.88.0-blue.svg)](https://www.rust-lang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

📖 **[中文文档](readme.zh-CN.md)** | **English**

A modern Rust workspace project managed with [cargo-workspaces](https://github.com/pksunkara/cargo-workspaces) for efficient multi-crate development.

## 🚀 Features

- **Workspace Management**: Efficiently manage multiple Rust crates in a single workspace
- **Code Quality**: Built-in formatting and linting with `rustfmt` and `clippy`
- **Modern Tooling**: Uses the latest Rust toolchain and best practices
- **Cross-platform**: Works on Windows, macOS, and Linux

## 📋 Prerequisites

- **Rust**: Latest stable version (1.88.0+ recommended)
- **cargo-workspaces**: For workspace management

## 🛠️ Installation

### Install Rust

If you haven't installed Rust yet, visit [rustup.rs](https://rustup.rs/) or run:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Install cargo-workspaces

```bash
cargo install cargo-workspaces
```

## 🏗️ Workspace Management

### Initialize Workspace

```bash
cargo workspaces init
```

### Create New Project

```bash
cargo workspaces create --name <PROJECT_NAME>
```

### List All Projects

```bash
cargo workspaces list
```

### Get Help

```bash
cargo ws --help
```

## 🎨 Code Style

This project follows Rust formatting standards using `rustfmt` with a custom configuration defined in `.rustfmt.toml`.

### Formatting Commands

#### Format entire workspace
```bash
# Format all workspace members
cargo ws exec -- cargo fmt

# Check formatting without changes
cargo ws exec -- cargo fmt -- --check
```

#### Format specific crate
```bash
# Format a specific crate
cargo fmt -p <crate-name>

# Check formatting for a specific crate
cargo fmt -p <crate-name> -- --check
```

#### Format with specific options
```bash
# Format with verbose output
cargo ws exec -- cargo fmt --verbose

# Format specific files
cargo ws exec -- cargo fmt -- src/lib.rs src/main.rs
```

### Linting

Run Clippy for additional code quality checks:

```bash
# Run Clippy on all workspace members
cargo ws exec -- cargo clippy -- -D warnings --allow unexpected-cfgs

# Run Clippy on specific crate
cargo clippy -p <crate-name> -- -D warnings --allow unexpected-cfgs

# Run Clippy with all warnings
cargo ws exec -- cargo clippy -- -W clippy::all

# Run Clippy with specific checks
cargo ws exec -- cargo clippy -- -D clippy::pedantic
```

### Code Quality Checks

```bash
# Check all workspace members
cargo ws exec -- cargo check

# Build all workspace members
cargo ws exec -- cargo build

# Test all workspace members
cargo ws exec -- cargo test

# Run security audit
cargo audit --deny warnings
```

## 📁 Project Structure

```
ruts/
├── Cargo.toml          # Workspace configuration
├── .rustfmt.toml       # Rust formatting configuration
├── .gitignore          # Git ignore rules
├── README.md           # English documentation
├── readme.zh-CN.md     # Chinese documentation
├── src/                # Source code directory
│   ├── main.rs         # Main application entry point
│   └── lib.rs          # Library code
├── tests/              # Integration tests
├── examples/           # Example code
└── docs/               # Documentation
```

## 🚀 Development

### Building

```bash
# Build in debug mode
cargo build

# Build in release mode
cargo build --release

# Build specific target
cargo build --target x86_64-unknown-linux-gnu
```

### Testing

```bash
# Run all tests
cargo test

# Run tests with output
cargo test -- --nocapture

# Run specific test
cargo test test_name

# Run tests in parallel
cargo test --jobs 4
```

### Running

```bash
# Run in debug mode
cargo run

# Run with arguments
cargo run -- arg1 arg2

# Run in release mode
cargo run --release
```

### Documentation

```bash
# Generate documentation
cargo doc

# Generate and open documentation
cargo doc --open

# Generate documentation for all workspace members
cargo workspaces doc
```

## 🔧 Configuration

### Rustfmt Configuration

The project uses a custom `.rustfmt.toml` configuration:

```toml
# .rustfmt.toml
edition = "2021"
max_width = 100
tab_spaces = 4
newline_style = "Unix"
use_small_heuristics = "Default"
```

### Cargo Configuration

Workspace configuration in `Cargo.toml`:

```toml
[workspace]
members = [
    # Add your crate names here
]

[workspace.package]
version = "0.1.0"
edition = "2021"
authors = ["Your Name <your.email@example.com>"]
description = "A Rust workspace project"
license = "MIT"
repository = "https://github.com/yourusername/ruts"
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes
4. **Format** your code (`cargo fmt`)
5. **Test** your changes (`cargo test`)
6. **Lint** your code (`cargo clippy`)
7. **Commit** your changes (`git commit -m 'Add amazing feature'`)
8. **Push** to the branch (`git push origin feature/amazing-feature`)
9. **Open** a Pull Request

### Development Guidelines

- Follow Rust naming conventions
- Add tests for new functionality
- Update documentation as needed
- Ensure all tests pass before submitting
- Use meaningful commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [cargo-workspaces](https://github.com/pksunkara/cargo-workspaces) for workspace management
- [Rust Community](https://www.rust-lang.org/community) for the amazing ecosystem

## 📚 Additional Resources

- [Rust Book](https://doc.rust-lang.org/book/)
- [Rust Reference](https://doc.rust-lang.org/reference/)
- [Cargo Book](https://doc.rust-lang.org/cargo/)
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/)