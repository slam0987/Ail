document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const videoInput = document.getElementById('videoInput');
    const groupName = document.getElementById('groupName').value.trim();

    if (videoInput.files.length > 0 && groupName) {
        const groupContainer = document.createElement('div');
        groupContainer.classList.add('group-container');
        groupContainer.innerHTML = `<h3>مجموعة: ${groupName}</h3>`;

        Array.from(videoInput.files).forEach(file => {
            const videoContainer = document.createElement('div');
            videoContainer.classList.add('video-container');

            const videoElement = document.createElement('video');
            videoElement.src = URL.createObjectURL(file);
            videoElement.controls = true;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'حذف';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', function() {
                videoContainer.remove();
            });

            videoContainer.appendChild(videoElement);
            videoContainer.appendChild(deleteBtn);
            groupContainer.appendChild(videoContainer);
        });

        document.getElementById('videoGallery').appendChild(groupContainer);

        // يمكنك هنا رفع الفيديوهات إلى الخادم باستخدام Fetch API كما في المثال السابق
    } else {
        alert('يرجى اختيار فيديوهات وإدخال اسم المجموعة.');
    }
});
