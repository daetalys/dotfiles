# Dotfiles

This repository contains personal dotfiles and system configuration files for an Arch Linux setup. It is organized in a way that makes it easy to manage and deploy the configuration files across different machines.

## Repository Structure

- **dotconfig**: This directory contains all personal dotfiles and configuration files for various applications and tools.
- **sysconfig**: This directory contains system-level configuration files, such as Pacman and SSH configuration files. This directory is managed as a Git submodule.

## Setup Scripts

Two setup scripts are provided to automate the process of moving, linking, and deploying the configuration files:

1. **setup.sh**: This script moves the specified dotfiles and configuration files from your home directory into the "dotconfig" repository, and creates symbolic links to them in their original locations. Run this script only once when initially setting up the repository.

2. **install.sh**: This script is used to deploy the dotfiles and system-level configuration files on a new machine or to update the existing setup. It creates symbolic links to the files in their appropriate locations.

## Usage

### Initial Setup

1. Clone this repository to your desired location, usually your home directory:

```git clone https://github.com/daetalys/dotfiles $HOME/.dotconfig```


2. Run the `setup.sh` script to move your existing dotfiles and configuration files into the repository, and create symbolic links to them:

```$HOME/.dotconfig/setup.sh```


3. Commit and push your changes to the remote repository:

```
cd $HOME/.dotconfig
git add .
git commit -m "Initial commit of dotfiles"
git push
```


### Deploying on a New Machine

1. Clone this repository to your desired location:

```
git clone https://github.com/daetalys/dotfiles $HOME/.dotconfig
```


2. Navigate to the repository directory and update the submodules:

```
cd $HOME/.dotconfig
git submodule update --init --recursive
```


3. Run the `install.sh` script to deploy the dotfiles and system-level configuration files:

```$HOME/.dotconfig/install.sh```


## Updating the Repository

Whenever you make changes to your dotfiles or system-level configuration files, remember to commit and push the changes to the remote repository.

To update the "sysconfig" submodule in the main "dotconfig" repository, execute the following commands:

```
cd $HOME/.dotconfig/sysconfig
git pull origin master
cd ..
git add sysconfig
git commit -m "Update sysconfig submodule"
git push
```


And when updating the existing setup on a machine, make sure to run `git submodule update --init --recursive` before executing the `install.sh` script.

## Notes

- Ensure that you don't include sensitive information (like passwords or API keys) in your repository. Consider encrypting sensitive files or using a tool like `pass` to manage secrets.
- If you encounter issues with permissions or system-level files, ensure that you have the necessary privileges to access and modify those files.
