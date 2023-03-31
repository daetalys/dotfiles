#!/bin/bash

dotfiles_dir="$HOME/.dotconfig/dotfiles"
sysconfig_dir="$HOME/.dotconfig/sysconfig"

# List of dotfiles and configuration directories to be linked
dotfiles=(
  ".bash_profile"
  # ... other dotfiles from the previous list
  ".zshrc"
)

# List of system-level configuration files to be linked
sysconfig_files=(
  ("/etc/pacman.conf" "pacman.conf")
  ("/etc/ssh/sshd_config" "sshd_config")
  ("/etc/X11/xorg.conf.d/00-keyboard.conf" "00-keyboard.conf")
  ("/etc/X11/xorg.conf.d/40-libinput.conf" "40-libinput.conf")
)

# Create symlinks for dotfiles
for dotfile in "${dotfiles[@]}"; do
  ln -sf "$dotfiles_dir/$dotfile" "$HOME/$dotfile"
done

# Create symlinks for sysconfig files
for sysconfig_file in "${sysconfig_files[@]}"; do
  sudo ln -sf "$sysconfig_dir/${sysconfig_file[1]}" "${sysconfig_file[0]}"
done

echo "Dotfiles and system-level configuration files installed successfully."
