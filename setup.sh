#!/bin/bash

# List of dotfiles and configuration directories to be moved
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

repo_dir="$HOME/.dotconfig"

# Move dotfiles and create symlinks
for dotfile in "${dotfiles[@]}"; do
  # Check if the file or directory exists
  if [ -e "$HOME/$dotfile" ]; then
    # Move the file or directory to the repository
    mv "$HOME/$dotfile" "$repo_dir"

    # Create a symlink in the original location
    ln -s "$repo_dir/$dotfile" "$HOME/$dotfile"
  else
    echo "WARNING: $dotfile not found, skipping."
  fi
done

echo "Dotfiles setup complete."
