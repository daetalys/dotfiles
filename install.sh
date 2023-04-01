#!/bin/bash

dotfiles_dir="$HOME/.dotconfig"
sysconfig_dir="$HOME/.dotconfig/sysconfig"

# List of dotfiles and configuration directories to be linked
dotfiles=(
  ".bash_profile"
  ".bashrc"
  ".blackman/*"
  ".config/alacritty/*"
  ".config/aliases"
  ".config/awesome/*"
  ".config/fish/*"
  ".config/gtk-2.0/*"
  ".config/gtk-3.0/*"
  ".config/gtk-4.0/*"
  ".config/kcminputrc"
  ".config/kded5rc"
  ".config/kdeglobals"
  ".config/kglobalshortcutsrc"
  ".config/kgpgrc"
  ".config/kscreenlockerrc"
  ".config/ksplashrc"
  ".config/kwinrc"
  ".config/latte/*"
  ".config/lattedockrc"
  ".config/leftwm/*"
  ".config/lxsession/*"
  ".config/lxsession-default-apps/*"
  ".config/mimeapps.list"
  ".config/neofetch/*"
  ".config/nitrogen/*"
  ".config/openbox/*"
  ".config/pavucontrol.ini"
  ".config/powermanagementprofilesrc"
  ".config/qBittorrent/*"
  ".config/qtile/*"
  ".config/spectrwm/*"
  ".config/starship.toml"
  ".config/terminator/*"
  ".config/torrc"
  ".config/touchpadrc"
  ".config/user-dirs.dirs"
  ".config/volumeicon/*"
  ".config/xmobar/*"
  ".config/xmonad/*"
  ".config/xsettingsd/*"
  ".config/yakuakerc"
  ".conkyrc"
  ".doom.d/*"
  ".emacs.d/*"
  ".gitconfig"
  ".gitignore"
  ".gnupg/gpg.conf"
  ".gnupg/otrust.lst"
  ".gnupg/pubring.kbx"
  ".icons/*"
  ".local/share/color-schemes/*"
  ".local/share/dbus-1/*"
  ".local/share/icons/*"
  ".local/share/networkmanagement/*"
  ".local/share/plasma/*"
  ".local/share/themes/*"
  ".profile"
  ".ssh/authorized_keys"
  ".ssh/known_hosts"
  ".themes/*"
  ".vim/*"
  ".vimrc"
  ".Xauthority"
  ".Xdefaults"
  ".xinitrc"
  ".xmonad/*"
  ".Xresources"
  ".zshenv"
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
