// You can edit this file.
// This is a simple conversion script which uses Regular Expression.
// If additional conversions are required, please add it as you wish.

const fs = require("fs");

const BASH_ROOT = "C:/msys64";
const BASH_HOME = "C:/msys64/home/owner";

const src = process.argv[2];
const dest = process.argv[3];

try {
  const bash = fs.readFileSync(src, "utf8");
  let pwsh = convert(bash);

  pwsh =
    `\
# This file is auto generated by bash2pwsh.js

` + pwsh;

  fs.writeFileSync(dest, pwsh);

  console.log(`"${dest}" was created Successfully!`);
} catch (err) {
  console.log("Error : " + err.message);
}

/**
 * Convert bash script to powershell script.
 * @param {String} bash bash script body
 * @returns powershell script body
 */
function convert(bash) {
  // bash & powershell:
  // "$a" > variables are expaneded
  // '$a' > variables are not expanded

  // bash : export vs alias
  // > One difference between the two is that aliases are only a shell feature.
  // > Environment variables are inherited by all subprocesses (unless deliberately cleared).
  // https://unix.stackexchange.com/a/129609
  //
  // export diray='C:/'
  // echo $diary
  //
  // alias diary='C:/'
  // echo diary

  // bash : variable vs alias
  // https://stackoverflow.com/a/7342780/14820021

  // export d_diary='C:/Ws/diary'
  // >>>
  // $d_diary='C:/Dev'
  bash = bash.replace(/export (\w+)=(['"].*?['"])/g, "$$$1=$2");

  // alias which does not contains command or variables
  // alias code='C:/Dev/VSCode/Code.exe'
  // >>>
  // Set-Alias -Name code -Value 'cd $d_diary'
  bash = bash.replace(
    /alias (\w+)=(['"](?!\w{1,4} )[^$$]+?['"])/g,
    "Set-Alias -Name $1 -Value $2"
  );

  // ## alias which contains command or variables
  // alias cd_diary="cd $d_diary"
  // >>>
  // function cd_diary() { cd $d_diary }
  bash = bash.replace(/alias (\w+)=['"](.+?)['"]/g, "function $1() { $2 }");

  // EDITOR='code'
  // >>>
  // $EDITOR='code'
  bash = bash.replace(/(^(?:\s+)?)(\w+)=(['"].*?['"])$/gm, "$1$$$2=$3");

  // export PATH=$PATH:/usr/bin
  // >>>
  // $env:Path += ";C:/msys64/usr/bin"
  bash = bash.replace(
    /(?<=[:"'])\/(bin|dev|etc|home|mingw|msys|opt|tmp|usr|var)/g,
    `${BASH_ROOT}/$1`
  );
  bash = bash.replace(/export (\w+)=\$\w+:([\w:/\\]+)/g, '$env:$1 += ";$2"');

  // ~/.bashrc
  // >>>
  // C:/msys64/.bashrc
  bash = bash.replace(/~\//g, `${BASH_HOME}/`);

  // $@
  // >>>
  // $args
  bash = bash.replace(/\$@/g, "$$args");

  // bash/zsh arg numbers are different from powershell
  // $1
  // >>>
  // $args[0]
  for (let i = 0; i < 10; i++) {
    bash = bash.replace(new RegExp("$" + (i + 1), "g"), "$$args[" + i + "]");
  }

  // local some_variable
  // >>>
  // $some_variable
  bash = bash.replace(/^\s+local\s+(\w+)/gm, "$$$1");

  // /c/Program Files/
  // >>>
  // C:/Program Files
  bash = bash.replace(/(?:\s|^)\/([cdefghijk])\//im, "$1:/");

  // $args >& $outfile
  // >>>
  // $args Out-File -FilePath $outFile
  bash = bash.replace(/(\S+)\s*>&\s*(\S+)/g, "$1 | Out-File -FilePath $2");

  return bash;
}