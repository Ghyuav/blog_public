var count = 1;
function update() {
    update_btn = document.getElementById('mywords_update');
    update_btn.disabled = true;
    update_btn.innerHTML = '加载中...';

    fetch('https://api.g-haoyu.top/blog/mywords/'+count)
    // fetch('http://127.0.0.1:5000/randommusic')
    .then(response => {
        // 检查响应状态
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // 处理解析后的数据
        console.log(data);
        mywords_div = document.getElementById('words');
        mywords_div.innerHTML += data.data;
        count += 1;
        if (data.no_more==0) {

            update_btn.disabled = false;
            update_btn.innerHTML = '加载更多';
        }
        else {
            update_btn.innerHTML = '没有更多了';
        }
    })
    .catch(error => {
        // 处理请求过程中出现的错误
        console.error('Fetch error:', error);
    });
}

