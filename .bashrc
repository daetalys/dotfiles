# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# Load starship prompt if starship is installed
if  [ -x /usr/bin/starship ]; then
    __main() {
        local major="${BASH_VERSINFO[0]}"
        local minor="${BASH_VERSINFO[1]}"

        if ((major > 4)) || { ((major == 4)) && ((minor >= 1)); }; then
            source <("/usr/bin/starship" init bash --print-full-init)
        else
            source /dev/stdin <<<"$("/usr/bin/starship" init bash --print-full-init)"
        fi
    }
    __main
    unset -f __main
fi

# Advanced command-not-found hook
source /usr/share/doc/find-the-command/ftc.bash

# Aliases
alias dir='dir --color=auto'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias fixpacman="sudo rm /var/lib/pacman/db.lck"
alias grep='grep --color=auto'
alias grubup="sudo update-grub"
alias hw='hwinfo --short'
alias psmem10='ps auxf | sort -nr -k 4 | head -10'
alias psmem='ps auxf | sort -nr -k 4'
alias rmpkg="sudo pacman -Rdd"
alias tarnow='tar -acf '
alias untar='tar -zxvf '
alias upd='/usr/bin/update'
alias vdir='vdir --color=auto'
alias wget='wget -c '

# Help people new to Arch
alias apt-get='man pacman'
alias apt='man pacman'
alias helpme='cht.sh --shell'
alias please='sudo'
alias tb='nc termbin.com 9999'

# Cleanup orphaned packages
alias cleanup='sudo pacman -Rns `pacman -Qtdq`'

# Get the error messages from journalctl
alias jctl="journalctl -p 3 -xb"

# Recent installed packages
alias rip="expac --timefmt='%Y-%m-%d %T' '%l\t%n %v' | sort | tail -200 | nl"
alias dotfiles='/usr/bin/git --git-dir=/home/daetalys/.dotfiles/ --work-tree=/home/daetalys'
alias sysupdate='sudo pacman -Syu --noconfirm && yay -Syu && sudo snap refresh && sudo pacman -Qqm > packagesQm.txt && sudo pacman -Qqn > packagesQn.txt && sudo pacman -Qqdt > packagesOrphan.txt && sudo snap list > packagesSnap.txt'
alias packupdate='dotfiles add -u && dotfiles commit -S -am "Updated package lists, run commands, and other configuration files." && dotfiles push'
alias dotsync='dotfiles fetch --all && dotfiles reset --hard origin/master'

# XDG - set defaults as they may not be set
# See https://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html
# and https://wiki.archlinux.org/index.php/XDG_Base_Directory_support
export XDG_CONFIG_HOME="$HOME/.config"
export XDG_DATA_HOME="$HOME/.local/share"
export XDG_CACHE_HOME="$HOME/.cache"

if [ ! -w ${XDG_RUNTIME_DIR:="/run/user/$UID"} ]; then
    echo "\$XDG_RUNTIME_DIR ($XDG_RUNTIME_DIR) not writable. Unsetting." >&2
    unset XDG_RUNTIME_DIR
else
    export XDG_RUNTIME_DIR
fi