fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        const dataList = document.getElementById('data-list')

        data.forEach(item => {
            const li = document.createElement('li')
            li.innerHTML = `<strong>Name:</strong> ${item.name}
      <br>
      <strong>Email:</strong> ${item.email}`
            dataList.appendChild(li)

        })
    })
    .catch(err => console.log(
        'Error loading data from data.forEach'
    ))
