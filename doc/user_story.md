# Simple Editor

Our users want to have simple editor. They want to be able add their text and logo over background image and be able to download resulting image.

### As result we expect:
* Link to source code repo on git (it could be gitlab, github or bitbucket)
* “How to run it” instructions
* Short description of implemented features, how much time you spent on them. 
* Nice to have short description of technical decisions, used technologies and problems that you’ve have during development of editor.
* Any additional information you think is important

### Let’s assume that we:
* Support only evergreen browsers
* Don’t support touch or mobile devices
* Users have at least 1200px width screen with editor placed in layout
* Design is up to you and actually let’s pretend that our users don’t care about design currently. They more interested in functionality and they want to keep app layout but don’t want you to spend time on fancy buttons (but if you have time they will be happy to see some css transitions).
* And of course concrete implementation is up to you
* Things marked with [ + ] are nice to have but not required

Assets folder 
* [assets](https://drive.google.com/open?id=1l0AzbGZHCo2lOrxCpUfehOZ1mi48k7bJ)

![Editor Full](https://www.dropbox.com/s/ywqrosniarhafh0/image3.png?dl=0)

## Editor

Square area 400px x 400px

![Editor](https://www.dropbox.com/s/8kxte0vsb1we9hg/image2.png?dl=0)

## Select background

![Select background](https://www.dropbox.com/s/cw09teaonj35n8m/image7.png?dl=0)

Area contains 4 thumbnails of images.
Click on thumbnail - sets image as background for editor area. Our users don’t want to reposition it, resize or do any manipulations with it, they just want to see their background on the back.
Click on “Delete Background” - cleans background

In the assets folder you will be able to find empty_background file which you can use as editor default background image (no image selected). As option you can use “empty image” generated via gradient.

- [ + ] Use images from https://source.unsplash.com/ (concrete https://source.unsplash.com/random/) or any similar API
- [ + ] Add search field using https://source.unsplash.com/  (part with “Random search term”) and generate images by one user term. Again, you can use any solution close to unsplash.

## Add logo

![Add logo](https://www.dropbox.com/s/x1vy3he37kiyfkc/image1.png?dl=0)

* User should be able to add logo via drag’n’drop. On drop to the editor area create 100px x 100px logo
* User can add multiple logos.
* User can reposition logo inside editor using drag’n’drop after logo was added. 
* Click on logo shows “delete” button.
* Click on “delete” button removes logo from editor.

![Add logo](https://www.dropbox.com/s/zj0zce4fbjp3lgj/image8.png?dl=0)

- [ + ] Logo should be always in bounds of editor area.
- [ + ] User can resize logo. Minimal size 30px x 30px Maximal size 150px x 150px.
- [ + ] Remake delete UI. Remove delete button. Add right click behavior, show context menu with delete option.

## Add text

![Add text](https://www.dropbox.com/s/fhq1qsrr29kopnr/image4.png?dl=0)

* User should be able to add text to the editor.
* User should be able to provide his own text via text Input.
* User can select one of suggested font variants 
    * Arial
    * Times New Roman
    * Open Sans, available on https://fonts.google.com/specimen/Open+Sans
* Click on “add text” adds “black 20px” text to the center of the editor
* User can reposition text inside editor using drag and drop.
* User can delete added text from editor (logic and ui is the same as for Logo element)

- [ + ] Implement color selector for the text
- [ + ] Implement bold / underline / italic selector

## Download as image button

User should be able to download resulting image as file.

![Add text](https://www.dropbox.com/s/wj5oo9v8580lvi9/image6.png?dl=0)

## [ + ] Save / Load

![Add text](https://www.dropbox.com/s/qyp7d0ybk2kcz1e/image5.png?dl=0)

* On click “Save” - saves current state of the editor
* On click “Load” - restores saved state (if there is no saved state, “Load” button should be disabled)

- [ + ] Automatically save after every change. Let’s say, that change is one of “text added”, “text moved”, “logo added”, “logo moved”, “background selected”, “background deleted”, “text deleted”, “logo deleted” and automatically load last state window refresh.
- [ + ] Add possibility to revert N (let's say 5) last changes.
