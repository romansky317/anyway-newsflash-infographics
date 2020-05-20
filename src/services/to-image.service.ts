import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import axios from 'axios';
import { PictureAsPdf } from '@material-ui/icons';

const googleApiImg = `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=47.5763831,-122.4211769&fov=80&heading=70&pitch=0&key=AIzaSyDUIWsBLkvIUwzLHMHos9qFebyJ63hEG2M`;
const imgGoogle = {};
const fetchImgUrl = async () => {
  let fetchedData = await axios.get(googleApiImg).then((data) => console.log(data.config.url));
  return fetchedData;
};

const widgetToJpeg = (fileName: string, widgetElement: HTMLElement) => {
  html2canvas(widgetElement, {
    useCORS: true, // to allow loading maps
    imageTimeout: 3000,
    ignoreElements: (AnyWayButtton) => false,
  })
    .then(function (canvas) {
      const dataUrl = canvas.toDataURL();
      const googleImg = fetchImgUrl();
      // console.log(canvas);
      return canvas.toDataURL('image/png', 1.0);
    })
    .then(function (blob) {
      // console.log(`This is a blob: ${blob}`);
      saveAs(blob, `${fileName}.png`);
    });
};

export default widgetToJpeg;
