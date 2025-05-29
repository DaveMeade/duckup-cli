# duckup-cli

`duckup-cli` is a command-line interface (CLI) tool for updating DuckDNS records easily. This tool allows you to manage your DuckDNS domains directly from the terminal.

## Installation

To install the `duckup-cli`, clone the repository and navigate into the project directory:

```bash
git clone <repository-url-tbd>
cd duckup-cli
```

Then, install the dependencies:

```bash
npm install
```

## Setting Up Environment Variables

You can quickly set up the required environment variables using the interactive helper:

```bash
duckup-init
```

This command will prompt you for your DuckDNS token and domains, and automatically add the necessary `export` statements to your shell profile (e.g., `.zshrc`, `.bashrc`, or `.profile`).  
After running `duckup-init`, restart your terminal or run `source ~/.zshrc` (or the appropriate profile file) to apply the changes.

Alternatively, you can set the environment variables manually:

```bash
export DUCK_TOKEN="abcd123456"
export DUCK_DOMAINS="myhost,backuphost"
```

Make sure to replace `"abcd123456"` with your actual DuckDNS token and `"myhost,backuphost"` with your actual DuckDNS domains.

## Running the CLI

To run the CLI command, use:

```bash
duckup
```

## Linking the CLI Globally

To link the CLI globally for your user, run:

```bash
sudo npm link
```

This will make both `duckup` and `duckup-init` available as global commands.

## License

This project is licensed under the MIT License.