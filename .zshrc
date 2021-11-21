# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=10000
setopt autocd beep extendedglob nomatch notify
bindkey -e
# End of lines configured by zsh-newuser-install
# The following lines were added by compinstall
zstyle :compinstall filename '/home/daetalys/.zshrc'

autoload -Uz compinit
compinit
# End of lines added by compinstall

source /usr/share/doc/find-the-command/ftc.zsh

alias rip="expac --timefmt='%Y-%m-%d %T' '%l\t%n %v' | sort | tail -200 | nl"
alias dotfiles='/usr/bin/git --git-dir=/home/daetalys/.dotfiles/ --work-tree=/home/daetalys'
alias sysupdate='sudo pacman -Syu --noconfirm && yay -Syu && sudo snap refresh && sudo pacman -Qqm > packagesQm.txt && sudo pacman -Qqn > packagesQn.txt && sudo pacman -Qqdt > packagesOrphan.txt && sudo snap list > packagesSnap.txt'
alias packupdate='dotfiles add -u && dotfiles commit -S -am "Updated package lists, run commands, and other configuration files." && dotfiles push'
alias dotsync='dotfiles fetch --all && dotfiles reset --hard origin/master'