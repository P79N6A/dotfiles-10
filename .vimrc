"   TABLE OF CONTENTS
"---------------------------------------
"   1 Basic Config
"   2 Indentation
"   3 Appearance
"   4 Search
"   5 Edit
"   6 Key Map
"   7 Unmapped Macros

"    Basic Config
let mapleader=","
syntax on
filetype off
filetype plugin indent on
set nocompatible
set showcmd
set mouse=a
set bs=2
set encoding=utf-8
set t_Co=256
set bg=dark
colo molokai
set guifont=monospace

"	Indentation
set shiftwidth=4
set softtabstop=4
set tabstop=4

"	Appearance
set number relativenumber
set textwidth=80
set nowrap
set sidescrolloff=20
set ruler

"	Search
set showmatch
set nohlsearch
set incsearch
set ignorecase
set smartcase

"	Edit
set nobackup
set undofile
set undodir=/tmp
set noerrorbells
set history=1000
set wildmode=longest,list,full
set wildmenu

"   Key Map

" inoremap <C-CR> <Esc>o<Esc>ki
" inoremap <C-S-CR> <Esc>O

" automatically insert matching ',",`,(,[, or {
inoremap ' ''<Esc>i
inoremap " ""<Esc>i
inoremap ` ``<Esc>i
inoremap ( ()<Esc>i
inoremap [ []<Esc>i
inoremap { {}<Esc>i
" automatically skip outside of the pair of ',",`,(,[, or {
	" In the future it would be nice to have this detect if there is a
	" neightboring ) instead of just skipping out of an empty pair ()
inoremap '' ''<Esc>a
inoremap "" ""<Esc>a
inoremap `` ``<Esc>a
inoremap () ()<Esc>a
inoremap [] []<Esc>a
inoremap {} {}<Esc>a
" automatically delete the created pair of parenthesis
"inoremap '' ''<Esc>a
"inoremap "" ""<Esc>a
"inoremap `` ``<Esc>a
"inoremap (<BS> <Esc>xi
"inoremap [] []<Esc>a
"inoremap {} {}<Esc>a

"tab selected text and keep selected
vnoremap < <gv
vnoremap > >gv


"   Unmapped Macros
