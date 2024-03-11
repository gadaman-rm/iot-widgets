### use
```
yarn plop widget Test HTMLDivElement div g-test
```
## Code Analysis
### Count line
```
cloc --fullpath \
 --not-match-d='(node_modules|dist|plop_templates)' \
 --not-match-f='(plopfile.mjs|.dependency-cruiser.cjs)' \
 --exclude-list-file=notcount .
```
