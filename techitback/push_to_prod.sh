# save current directory
VAR=`pwd`

cd /Users/williamtachau/Development/freelance/intralink
ssh -i intralink.pem ubuntu@54.69.40.209 ' 				# ssh into instance
cd intralink/techitback/techitback/					# navigate to git directory
sudo git pull origin master						# pull in latest changes
ps aux | grep "keystone" | awk '{ print $2 }' | xargs sudo kill -9	# kill current keystone process
forever start keystone.js						# start 'forever' daemon with keystone.js
exit
'
# update static assets
cd $VAR
#aws s3 cp bennett_site/bennett_site/static/ s3://tachaubennettresources/ --recursive --acl public-read

