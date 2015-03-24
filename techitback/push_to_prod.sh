# save current directory
VAR=`pwd`

# cd /Users/williamtachau/Development/freelance/intralink
ssh -i ../../techitback.pem ubuntu@52.0.15.47 ' 				# ssh into instance
cd techitback/techitback/					# navigate to git directory
sudo git pull origin master						# pull in latest changes
ps aux | grep "keystone" | awk '{ print $2 }' | xargs sudo kill -9	# kill current keystone process
forever start keystone.js						# start 'forever' daemon with keystone.js
exit
'
# update static assets
cd $VAR
#aws s3 cp bennett_site/bennett_site/static/ s3://tachaubennettresources/ --recursive --acl public-read

