
export default class Recipe{
    id:Number
    title:String
    slug:String
    description:String
    image:String
    status:String
    duration:Date
    author:String
    liked_num:Number
    created_at:Date
    updated_at:Date

    constructor(data: { id: Number; title: String; slug: String; description: String; duration: Date; image: String; author: String; liked_num: Number; status: String; created_at: Date; updated_at: Date }){
        if(!data){
            return
        }
        this.id = data?.id;
        this.title = data?.title;
        this.slug = data?.slug;
        this.description = data?.description
        this.duration = data?.duration
        this.image = data?.image;
        this.author = data?.author;
        this.liked_num = data?.liked_num
        this.status = data?.status;
        this.created_at = data?.created_at;
        this.updated_at = data?.updated_at;
    }

    toString(){
        return {
            id:this.id,
            title:this.title,
            slug:this.slug,
            image:this.image,
            status:this.status,
            created_at:this.created_at,
            updated_at:this.updated_at,
        }
    }

}