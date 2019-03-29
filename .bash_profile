#
# ~/.bash_profile
#

[[ -f ~/.bashrc ]] && . ~/.bashrc

# export PATH="\$GOPATH/bin:\$PATH"
export EDITOR="vim"
export GOPATH="/home/maximillian/go"
export TERMINAL="st"
if [[ "$(tty)" = "/dev/tty1" ]]; then
	pgrep i3 || startx
fi

# Switch escape and caps if tty:
sudo -n loadkeys ~/.scripts/ttymaps.kmap 2>/dev/null
