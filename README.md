# Dotfiles

This repository is your one-stop destination for managing and deploying personal dotfiles and system configurations for an Arch Linux setup. The repository is structured to simplify and streamline the process across various machines.

## Structure of the Repository

- **.files**: This directory holds your personal dotfiles and configurations for various applications and tools.
- **sysconfig**: This directory houses system-level configuration files, including Pacman and SSH configurations. This directory functions as a Git submodule.

## Scripts to Automate Setup

Two scripts are provided to automate the process of moving, linking, and deploying the configuration files:

1. **setup.sh**: This script transfers the dotfiles and configuration files you specify from your home directory into the ".files" repository. It then creates symbolic links for them at their original locations. This script is intended for one-time use during the initial setup of the repository.

2. **install.sh**: This script first requests the directory containing your dotfiles, then creates that directory if it doesn't exist (user approval required). It then deploys the dotfiles and, if the user agrees, system-level configuration files. Symbolic links are created at the appropriate locations.

## Usage

### Initial Setup

1. Clone the repository to your chosen location (usually the home directory):

    ```
    git clone https://github.com/daetalys/dotfiles $HOME/.files
    ```

2. Run the `setup.sh` script to move your existing dotfiles and configuration files into the repository, and create symbolic links for them:

    ```
    $HOME/.files/setup.sh
    ```

3. Stage, commit, and push your changes to the remote repository:

    ```
    cd $HOME/.files
    git add .
    git commit -m "Initial commit of dotfiles"
    git push
    ```

### Deploying on a New Machine

1. Clone the repository to your desired location:

    ```
    git clone https://github.com/daetalys/dotfiles $HOME/.files
    ```

2. Navigate to the repository directory and update the submodules:

    ```
    cd $HOME/.files
    git submodule update --init --recursive
    ```

3. Run the `install.sh` script to deploy the dotfiles and system-level configuration files:

    ```
    $HOME/.files/install.sh
    ```

## Updating the Repository

Whenever you make changes to your dotfiles or system-level configuration files, remember to commit and push the changes to the remote repository. 

To update the "sysconfig" submodule in the main ".files" repository, execute the following commands:

    ```
    cd $HOME/.files/sysconfig
    git pull origin master
    cd ..
    git add sysconfig
    git commit -m "Update sysconfig submodule"
    git push
    ```

Before running the `install.sh` script to update the existing setup on any machine, always run `git submodule update --init --recursive`.

## Notes

- Do not include sensitive information (like passwords or API keys) in your repository. Consider encrypting sensitive files or using a tool like `pass` to manage secrets.
- If you encounter issues with permissions or system-level files, ensure that you have the necessary privileges to access and modify those files.
