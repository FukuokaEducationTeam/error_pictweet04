git checkout 'master'
rails g model direct_message
git add .
git commit -m 'generate direct_message model'
git push
git checkout -b 'generate_direct_message_model_'`date +"%Y年%m月%d日%H時%M分%S秒"`
