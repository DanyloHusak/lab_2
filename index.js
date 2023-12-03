const takeScreenshotBtn = document.getElementById('take-screenshot-btn');
const statusMsg = document.getElementById('status-msg');

takeScreenshotBtn.addEventListener('click', () => {
  chrome.tabs.captureVisibleTab(null, { format: 'png' }, dataUrl => {

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `screenshot_${Date.now()}.png`;
      link.click();
      statusMsg.textContent = 'Done!';

  });
});