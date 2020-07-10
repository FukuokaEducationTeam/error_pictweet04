git stash clear
curl https://raw.githubusercontent.com/usagrammer/direct_messages_controller/master/direct_messages_controller.rb >> app/controllers/direct_messages_controller.rb
git add .
git stash save "!!GitHub_Desktop<`git rev-parse --abbrev-ref HEAD`>"
git checkout -b 'create_direct_messages_controller_'`date +"%Y年%m月%d日%H時%M分%S秒"`
killall "GitHub Desktop"
