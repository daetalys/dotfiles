#
# ~/.bash_profile
#

[[ -f ~/.bashrc ]] && . ~/.bashrc

# if [[ "$(tty)" = "/dev/tty1" ]]; then
#	startx
# fi

# XDG User Directories
export XDG_DESKTOP_DIR="$HOME/Desktop"
export XDG_DOCUMENTS_DIR="$HOME/Documents"
export XDG_DOWNLOAD_DIR="$HOME/Downloads"
export XDG_MUSIC_DIR="$HOME/Music"
export XDG_PICTURES_DIR="$HOME/Pictures"
export XDG_PUBLICSHARE_DIR="$HOME/Public"
export XDG_TEMPLATES_DIR="$HOME/Templates"
export XDG_VIDEOS_DIR="$HOME/Videos"

# XDG Base User Directories
export XDG_CONFIG_HOME="$HOME/.config"
export XDG_CACHE_HOME="$HOME/.cache"
export XDG_DATA_HOME="$HOME/.local/share"
export XDG_STATE_HOME="$HOME/.local/state"
## export XDG_RUNTIME_DIR="/run/user/$UID"

# XDG Base System Directories
export XDG_DATA_DIRS="/usr/local/share:/usr/share"
export XDG_CONFIG_DIRS="/etc/xdg"

export EDITOR="vim"
export VISUAL="emacsclient -c -a emacs"
export CODEEDITOR="codium"
export TERMINAL="terminator"
export COLORTERM="truecolor"
export BROWSER="firefox"

# Path Environment Variables
if [ -d "$HOME/.bin" ] ;
  then PATH="$HOME/.bin:$PATH"
fi

if [ -d "$HOME/.local/bin" ] ;
  then PATH="$HOME/.local/bin:$PATH"
fi

if [ -d "$HOME/Applications" ] ;
  then PATH="$HOME/Applications:$PATH"
fi

if [ -d "$HOME/.local/share/solana/install/active_release/bin" ] ;
  then PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"
fi

if [ -d "$HOME/.cargo/bin" ] ;
  then PATH="$HOME/.cargo/bin:$PATH"
fi

if [ -d "/var/lib/flatpak/exports/share" ] ;
  then PATH="/var/lib/flatpak/exports/share:$PATH"
fi

if [ -d "$HOME/.local/share/flatpak/exports/share" ] ;
  then PATH="$HOME/.local/share/flatpak/exports/share:$PATH"
fi