

### Set up dev env
* prequesites: node
* run `npm install`
* copy the recomended files below into your `.vscode` folder
* run `npm run dev` for serving on debug mode with livereload on file change with nodemon


### Recommended files
`launch.json` for debugging with VSCode after pressing `F5`
```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Debug server",
            "program": "${workspaceFolder}/src\\server.ts",
            "preLaunchTask": "tsc: build - tsconfig.json",
            "outFiles": [
                "${workspaceFolder}/bin/**/*.js"
            ]
        }
    ]
}
```
`tasks.json` for typescript
```
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "type": "typescript",
            "tsconfig": "tsconfig.json",
            "problemMatcher": [
                "$tsc"
            ]
        }
    ]
}
```

### Helpful Links
https://medium.com/aherforth/how-to-get-auto-restart-and-breakpoint-support-with-typescript-and-node-5af589dd8687