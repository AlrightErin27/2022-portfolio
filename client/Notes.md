# To see if your server is stepping out on you:

$: sudo lsof -i -P | grep LISTEN | grep :$PORT

$: kill -9 SPECIFICPIDNUM
