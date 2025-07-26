# Anchor CLI

Anchor 版本管理器 (AVM) 允许您在系统上安装和管理不同的 Anchor 版本，并在未来轻松更新 Anchor 版本。

使用以下命令安装 AVM：

cargo install --git https://github.com/coral-xyz/anchor avm --force

确认 AVM 是否成功安装：

avm --version

使用 AVM 安装最新版本的 Anchor CLI：

avm install latest
avm use latest

要验证安装是否成功，请检查 Anchor CLI 的版本：

```sh
anchor --version
```

> 安装了 AVM (Anchor Version Manager)，需要将 /Users/chaxus/.avm/bin 添加到你的 PATH。否则可能查询不到

```sh
echo 'export PATH="/Users/chaxus/.avm/bin:$PATH"' >> ~/.zshrc
```


# Solana CLI

Solana CLI 提供了构建和部署 Solana 程序所需的所有工具。

使用官方安装命令安装 Solana CLI 工具套件：

sh -c "$(curl -sSfL https://release.anza.xyz/stable/install)"

您可以将 stable 替换为与您所需版本的软件版本匹配的发布标签（例如 v2.0.3），或者使用以下三个符号通道名称之一：stable、beta 或 edge。

首次安装 Solana CLI 时，您可能会看到以下消息，提示您添加一个 PATH 环境变量：

关闭并重新打开终端以应用 PATH 更改，或者在现有的 shell 中运行以下命令：

export PATH="/Users/test/.local/share/solana/install/active_release/bin:$PATH"

如果您使用的是带有 zsh 的 Mac，运行安装后记录的默认 export PATH 命令在关闭终端后不会持久化。

相反，您可以通过运行以下命令将 PATH 添加到您的 shell 配置文件：

echo 'export PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"' >> ~/.zshrc

然后运行以下命令以刷新终端会话或重新启动终端。

source ~/.zshrc

要验证安装是否成功，请检查 Solana CLI 的版本：

solana --version

您应该会看到如下输出：

solana-cli 2.2.12 (src:0315eb6a; feat:1522022101, client:Agave)

您可以在 [Agave Github](https://github.com/anza-xyz/agave/releases) 仓库 查看所有可用版本。

要稍后将 Solana CLI 更新到最新版本，您可以使用以下命令：

agave-install update