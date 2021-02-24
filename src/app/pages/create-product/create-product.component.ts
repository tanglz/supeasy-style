import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  formGroup:FormGroup;
  fileList: NzUploadFile[] = [];
  imgsList:string[]=[];
  previewImage: string | undefined = '';
  previewVisible = false;
  url='http://springbootsupeasy-env.eba-wk98fipi.us-east-1.elasticbeanstalk.com/api/image/upload'

  constructor(private fb:FormBuilder, private https:HttpService) { }

  ngOnInit(): void {
    this.formGroup=this.fb.group({
      name:[null, [Validators.required]],
      price:[null, [Validators.required]],
      images:[null, [Validators.required]],
      description:[null]
    })
  }

  handlePreview = async (file: NzUploadFile) => {
 
    if (!file.url && !file.preview) {
      file.preview = await this.getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.imgsList.push(file.url)
    this.previewVisible = true;
    
  };
   getBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  submitForm(){
    let imgs:string[]=[];
    if (this.fileList.length!=0) {
      this.fileList.forEach(val=>{
        console.log(val.response)
        imgs.push(val.response.image_url)
      })
      this.formGroup.addControl('images',new FormControl(imgs, Validators.required));
    }

    
    this.https.createProduct(this.formGroup.value).subscribe(res=>{
      console.log(res);
    })

  }

}
