#    ____            __        __      __  _           
#   / __ \____ ___  / /_____ _/ /_  __/ /_(_)________ _
#  / / / / __ ` _ \/ __/ __ `/ / / / / __/ / ___/ __ `/
# / /_/ / /_/   __/ /_/ /_/ / / /_/ / /_/ / /__/ /_/ / 
#/_____/\__,_____/\__/\__,_/_/\__, /\__/_/\___/\__,_/  
#                            /____/                    
#  https://daetalytica.io   oracle@daetalytica.io
#               .^~.            .~^.               
#            :^^!~.              .~!^^:            
#         :^^:.^^                  ^^.:^^:         
#      .^^:. .~^                    ^~. .:^^.      
#      :!   :!^^^:..:^^:.  .:^^:..:^^^!:   !:      
#      :!   :^^::::^~:.:^~~^:.:~^::::^^.   !:      
#      .^^^:   .:^^::.   ^^   .::^^:.   :^^^.      
#     ^~  .:^^:.   ^!^   ^^   ^!^.  .:^^:.  ~^     
#     !7~.   .:^^:.      ^^      .:^^:.   .~7!.    
#    .!!7!~:.    .^^^:.  ^^  .:^^^.    .:~!7!!.    
#     ^7!!77!~^:.   .^!: ^^ :!~.   .:^~!77!!7^     
#      ^77!!!!77!~^:     ^^     :^~!77!!!!7!^      
#       :~!77^:!!777!:   ^^   :!777!!^^!7!~.       
#         .:^^ :!!!!~!~  ^^  ~!~!!!!: ^^:.         
#               !!!! .~: ^^ :~. !!!!               
#              .!77~   . !! .   ~77!.              
#              .^~!7!^.  ..  .^!7!~^.              
#               ..:^!7!~.  .~!7!^:..               
#               .:^^~7!7!^^!7!7~^^:.               
#                  .:^!777777!^:.                  
#                      :!77!:                      
#                        ^^                        
#                                                  
# XDG Base Directory Specification
export XDG_CONFIG_HOME="$HOME/.config"             # User-specific configuration directory
export XDG_CACHE_HOME="$HOME/.cache"               # User-specific cache directory
export XDG_DATA_HOME="$HOME/.local/share"          # User-specific data directory
export XDG_STATE_HOME="$HOME/.local/state"         # User-specific state directory
export XDG_RUNTIME_DIR="/run/user/$UID"            # User-specific runtime directory (usually on a tmpfs)
export XDG_DATA_DIRS="/usr/local/share:/usr/share" # System-wide data directories (colon-separated list)
export XDG_CONFIG_DIRS="/etc/xdg"                  # System-wide configuration directories (colon-separated list)

# XDG User Directories Specification
export XDG_DESKTOP_DIR="$HOME/Desktop"           # Desktop directory
export XDG_DOCUMENTS_DIR="$HOME/Documents"       # Documents directory
export XDG_DOWNLOAD_DIR="$HOME/Downloads"        # Downloads directory
export XDG_MUSIC_DIR="$HOME/Music"               # Music directory
export XDG_PICTURES_DIR="$HOME/Pictures"         # Pictures directory
export XDG_PUBLICSHARE_DIR="$HOME/Public"        # Public sharing directory
export XDG_TEMPLATES_DIR="$HOME/Templates"       # Templates directory
export XDG_VIDEOS_DIR="$HOME/Videos"             # Videos directory

# Terminal settings
export TERMINAL="alacritty"                      # Terminal emulator name
export TERM="xterm-256color"                     # Terminal type and capabilities (256-color support)
export COLORTERM="truecolor"                     # Terminal color mode (true color support)

# Default applications
export VISUAL="vscodium"                          # Default visual text editor
export EDITOR="vim"                               # Default command-line text editor
export ALTERNATE_EDITOR=""                        # Fallback editor for emacsclient
export READER="evince"                            # Default PDF/document viewer
export BROWSER="firefox"                          # Default web browser
export PAGER="less"                               # Default pager for command output
export MANPAGER="sh -c 'col -bx | bat -l man -p'" # Default pager for man pages using bat with man syntax highlighting
export WM="awesomewm"                             # Default window manager

# Shell history settings
export HISTCONTROL=ignoredups:erasedups          # Prevent duplicate entries in shell command history

# User-specific directories
if [ -d "$HOME/.bin" ]; then
  PATH="$HOME/.bin:$PATH"
fi

if [ -d "$HOME/.local/bin" ]; then
  PATH="$HOME/.local/bin:$PATH"
fi

if [ -d "$HOME/Applications" ]; then
  PATH="$HOME/Applications:$PATH"
fi

# Application-specific directories
if [ -d "$HOME/.local/share/solana/install/active_release/bin" ]; then
  PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"
fi

if [ -d "$HOME/.cargo/bin" ]; then
  PATH="$HOME/.cargo/bin:$PATH"
fi

if [ -d "$HOME/.emacs.d/bin" ]; then
  PATH="$HOME/.emacs.d/bin:$PATH"
fi

# System-wide directories
if [ -d "/var/lib/flatpak/exports/share" ]; then
  PATH="/var/lib/flatpak/exports/share:$PATH"
fi

if [ -d "$HOME/.local/share/flatpak/exports/share" ]; then
  PATH="$HOME/.local/share/flatpak/exports/share:$PATH"
fi
