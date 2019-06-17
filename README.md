## Features
- bootstrap 4
- scrollspy
- mathjax
- highlightjs
- abcjs

## Requirements
- hugo **with extras**

## Installation

- Build and install hugo extended
```
go build -o /tmp/hugo -tags extended
sudo mv /tmp/hugo /usr/local/bin/hugo
```

- Install `npm`
- Install dependencies
    ```
    npm install
    ```

- Build favicon bundle
    ```
    make favicon
    ```


### Known issues
#### PostCSS not found
Unfortunately, it's not enough to install `postcss-cli` executable into theme's node_modules directory. Hugo doesn't look there. Thus, you have to install `postcss-cli` globally into `/usr/local` directory and most likely with priveleged permissions (`sudo`) or into your project root directory.

```
cd /project/root

npm install postcss-cli autoprefixer

cat >> .gitignore << EOF
node_modules/
package-lock.json
```

## Versioning

[SemVer](http://semver.org/) is used for versioning.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


## Authors

* **Alexey Shchukin** - Initial work
