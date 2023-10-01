while :; do
  sleep 1m
  date
  if ruby is_n_am.rb 8; then
    break
  fi
done
date
echo "after is_n_am 8"

sleep 58m
date
echo "after sleep 58m"

while :; do
  sleep 0.1
  date
  if ruby is_n_am.rb 9; then
    break
  fi
done
date
echo "after is_n_am 9"

node index.js
date

# bash run.sh > out.txt 2> err.txt
# tail -f out.txt
# tail -f err.txt
