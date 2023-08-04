rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add origin https://github.com/Mianxiong/yummy-ui-vue3.git &&
git push -f -u origin master &&
cd -
