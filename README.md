# [<img src=".github/logo.svg">](/)

> Cli app can move files/folders to the trash without any dangerous

Works on Windows 8 or higher, Linux (any platform), and macOS (10.12+).

The problem of [`rm`](http://en.wikipedia.org/wiki/Rm_(Unix)) which is [dangerous](http://docstore.mik.ua/orelly/unix3/upt/ch14_03.htm) and permanently delete files, and you can't restore it, `manx` just moves them to the trash, which is much safer and reversible .

## Install

```s
$ npm i -g manx
```

## Usage

```s
$ manx --help

  Usage
	  $ manx <file/folder> […]

	Examples
	  # file
	  $ manx xcode.tsx layout.tsx edge.tsx
	  $ manx '*.tsx' '!xcode.tsx'
	  # folder
	  $ manx app
```

## **Pro** Tip

if you want to use `rm`, you can add `alias rm=manx` to your `.zshrc`/`.bashrc` to reduce typing & safely trash files: `$ rm manx.svg`.

## **Private thank**

I offer special thanks to [@sindresorhus](https://github.com/sindresorhus) and his cool package [trash](https://github.com/sindresorhus/trash).
