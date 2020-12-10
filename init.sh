# init
git init

git add .

echo "commit name: "
echo " "
read cn

git commit -m "$cn"

echo "brach name: "
echo " "
read bn

git branch -M $bn

echo "url: "
echo " "
read url

git remote add origin $url

git push -u origin $bn
