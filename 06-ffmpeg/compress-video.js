const { spawn } = require('child_process');
const nameVideo = process.argv[2];

if (!nameVideo) {
  throw new Error('Required name video');
}

const resSize = (video, quality) => {
  const promise = new Promise((resolve, reject) => {
    const ffmpeg = spawn('ffmpeg', [
      '-i', `${nameVideo}`, '-codec:v',
      'libx264', '-profile:v', 'main',
      '-preset', 'slow', '-b:v',
      '400k', '-maxrate', '400k',
      '-bufsize', '800k', '-vf',
      `scale=-2:${quality}`, '-threads', '0',
      '-b:a', '128k', `./${video}-${quality}.mp4`
    ]);

    ffmpeg.stderr.on('data', (data) => console.log('stderr', data.toString()) );
    ffmpeg.on('close', () => {
      resolve(`${video}-${quality}.mp4 ok`);
      setTimeout(() => require('fs').unlinkSync(`./${video}-${quality}.mp4`), 7000);
    });
  });

  return promise;
}

const execute = () => {
  const name = nameVideo.split('.')[0];
  try {
    Promise.allSettled(
      [
        resSize(name, 720),
        // resSize(name, 600),
        // resSize(name, 500),
        resSize(name, 480),
        // resSize(name, 360),
        // resSize(name, 240),
        resSize(name, 120)
      ])
      .then((result) => console.log('Finalized videos', nameVideo, result) );
  } catch (error) {
    console.log(error);
  }
}

execute();