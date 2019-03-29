#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '

# temporary shortcut for vim cheat sheet
# alias vimcs="i3-msg $TERMINAL; feh /home/maximillian/Pictures/Wallpapers/VimCheatSheet004.jpeg"

# alias for editing notes and stuff
alias notes="vim $HOME/Documents/notes.md"

# temporary shortcut for changeing i3 config
alias i3cfg="vim $HOME/.config/i3/config"
# Activate vi mode with <Esc>

# set -o vi
