import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../shared/models/file-handle';
import { Product } from '../shared/models/Products';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer: DomSanitizer) { }

  public createImages(product: Product){
    const productImages: any[] = product.productImages;

    const productImagesToFileHandle: FileHandle[] = [];

    for(let i=0; i < productImages.length; i++){
      const imageFileData = productImages[i];

      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);

     const imageFile = new File([imageBlob], imageFileData.name, {type: imageFileData.type});

     const finalfileHandle: FileHandle = {
      file: imageFile,
      url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
     };
      productImagesToFileHandle.push(finalfileHandle);
    }
     product.productImages = productImagesToFileHandle;
     return product;
  }

  public dataURItoBlob(picBytes: string, imageType: any) {
    const byteString = window.atob(picBytes);
    const arraybuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arraybuffer);

    for(let i=0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], {type: imageType});
    return blob;
  }


}
