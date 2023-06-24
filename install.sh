#!/bin/bash

# Ask the user for the directory containing the dotfiles
read -p "Please enter the directory containing the dotfiles: " dotfiles_dir
dotfiles_dir=${dotfiles_dir:-"$HOME/.files"}

# Check if directory exists
if [ ! -d "$dotfiles_dir" ]; then
  echo "The directory $dotfiles_dir does not exist."
  # Ask the user if they want to create the directory
  read -p "Do you want to create this directory? (y/n) " create_dir

  if [ "$create_dir" == "y" ]; then
    echo "Creating directory $dotfiles_dir"
    mkdir -p "$dotfiles_dir"
  else
    echo "Exiting."
    exit 1
  fi
fi

# Define the list of dotfiles
dotfiles=(
  ".bashrc"
  ".config/*"
  ".zshrc"
#...Add more here as needed...#
)

# Create symlinks for dotfiles
for dotfile in "${dotfiles[@]}"; do
  if [ -e "$dotfiles_dir/$dotfile" ]; then
    echo "Creating symlink for $dotfile"
    ln -sf "$dotfiles_dir/$dotfile" "$HOME/$dotfile"
  else
    echo "$dotfile not found in $dotfiles_dir"
  fi
done

# Ask the user if they want to install system-level configuration files
read -p "Do you want to install system-level configuration files? (y/n) " install_sysconfig

if [ "$install_sysconfig" == "y" ]; then
  sysconfig_dir="$dotfiles_dir/sysconfig"

  # Check if sysconfig directory exists
  if [ ! -d "$sysconfig_dir" ]; then
    echo "The directory $sysconfig_dir does not exist. Skipping system-level configuration files."
  else
    # Define the list of system-level configuration files
    sysconfig_src_files=(
      "/etc/pacman.conf"
      "/etc/ssh/sshd_config"
      "/etc/X11/xorg.conf.d/00-keyboard.conf"
      "/etc/X11/xorg.conf.d/40-libinput.conf"
    )

    sysconfig_dest_files=(
      "pacman.conf"
      "sshd_config"
      "00-keyboard.conf"
      "40-libinput.conf"
    )

    # Create symlinks for system-level configuration files
    for ((i=0; i<${#sysconfig_src_files[@]}; i++)); do
      if [ -e "$sysconfig_dir/${sysconfig_dest_files[i]}" ]; then
        echo "Creating symlink for ${sysconfig_dest_files[i]}"
        sudo ln -sf "$sysconfig_dir/${sysconfig_dest_files[i]}" "${sysconfig_src_files[i]}"
      else
        echo "${sysconfig_dest_files[i]} not found in $sysconfig_dir"
      fi
    done
  fi
fi

echo "Installation complete."
