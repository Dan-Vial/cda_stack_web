# CDA PROD

Mono repo pour la consecption et le dévelopement d'applicaton web.

```
.
└── CDA_PRO
    ├── bin
    │   └── command shell automation ...
    ├── projects - all projects
    │   ├── model_project
    │   │   ├── frontend
    │   │   │   └── ...
    │   │   └── backend
    │   │       └── ...
    │   └── create new project
    ├── packages - all modules reusable
    │   ├── ui
    │   │   └── button
    │   └── create new module
    ├── ssl
    │   └── manager_private_ca
    │       ├── CA
    │       │   ├── root-ca - once added root-ca.crt to the browser
    │       │   └── localhost.test
    │       └── pca - command shell gen CA and DomainName.crt
    └── node_modules
        └── ...
```

## cheat sheet

dev. multiple app mono repo folder

- workspaces

  > https://docs.npmjs.com/cli/v10/using-npm/workspaces

- atomic design

  > https://bradfrost.com/blog/post/atomic-web-design/

- graph tree directory

  > https://tree.nathanfriend.io/

  > [cda tree](<https://tree.nathanfriend.io/?s=(%27options!(%27fancy!true~fullPatBtrailingSlasBIotDot!true)~H(%27H%27CDA_PRO0bin54automatioKJ03L3s5model_39fIntE9backE6350packageL7s%20reusable5ui9button670ssl5manager_private_ca9CA9*Iot-ca2oncGaddeFCA.crt%20to%20thGbIwser9*localhost.test9pca24geKCA%20anFDomainName.crt0node_7s5J0%27)~version!%271%27)*%20%200%5Cn*2%20-%203pIject4commanFshe850*65creatGnew%207module8ll%2095*Bh!false~Eend9*JFd%20Ge%20Hsource!IroJ...Kn%20Ls2a8%01LKJIHGFEB987654320*>)

### create workspace

`npm init -w ./packages -y`

`npm init -w ./packages/ui -y`

### create app in workspace

`npm create vite@latest -w ./apps/frontend/`

`npm create vite@latest -w ./packages/ui/`

`express --git --no-view -f ./apps/backtend/`

### install package in workspace

`npm i -D vite -w ./apps/frontend/`
