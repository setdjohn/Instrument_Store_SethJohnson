var store = new Vue({
        el: "#store",
        data: {
            card:[
                //Fender
                {
                    name:"Electric Guitar",
                    type: "electric",
                    price: "$120",
                    brand: "Fender",
                    img: "https://www.adorama.com/images/Large/fe0114930302.jpg"
                },
                {
                    name:"Bass Guitar",
                    type: "bass",
                    price: "$120",
                    brand: "Fender",
                    img: "https://d1aeri3ty3izns.cloudfront.net/media/44/449508/1200/preview.jpg"

                },
                {
                    name:"Acoustic Guitar",
                    type: "Acoustic",
                    price: "$100",
                    brand: "Fender",
                    img: "https://images.reverb.com/image/upload/s--H5OF5coB--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1473185982/emb7tgfmhnanvfsp2akt.jpg"

                },
                //Yamaha
                {
                    name:"Piano",
                    type: "Piano",
                    price: "$300",
                    brand: "Yamaha",
                    img: "https://pianopiano.com/wp-content/uploads/2019/02/steinway-o-grand-piano-2-100x100.jpg"
                },
                {
                    name:"Marimba",
                    type: "Percussion",
                    price: "$250",
                    brand: "Yamaha",
                    img: "https://s3.amazonaws.com/images.static.steveweissmusic.com/products/images/uploads/26755_24055_popup.jpg"

                },
                {
                    name:"Flute",
                    type: "Woodwind",
                    price: "$170",
                    brand: "Yamaha",
                    img: "https://cdn2.bigcommerce.com/server4400/8346c/products/7945/images/8564/test2__84433.1574185264.1280.1280.jpg?c=2"

                },
                //Maton
                {
                    name:"Acoustic Guitar",
                    type: "acoustic",
                    price: "$100",
                    brand: "Maton",
                    img: "https://maton.com.au/images/made/assets/uploads/products/EML6_Profile_600_950_s_c1_c_t.jpg"
                },
                {
                    name:"Electric Guitar",
                    type: "electric",
                    price: "$100",
                    brand: "Maton",
                    img: "https://maton.com.au/assets/uploads/products/electric__tbird_thumnb.jpg"

                },
                {
                    name:"Ukulele",
                    type: "ukulele",
                    price: "$100",
                    brand: "Maton",
                    img: "https://maton.com.au/assets/uploads/products/UkeThumbFront.png"

                }
            ],
            cart:[],
            addForm: false,
            nameInput: "",
            typeInput: "",
            brandInput:"",
            costInput:"",
            addInfo: false,
            nameInfor:"",
            typeInfo:"",
            brandInfo:""
        },
        methods:{
            addCart:function(index){
                this.cart.push(this.card[index]);
                this.card.splice(index,1);
            },
            emptyCart: function(){
                this.instruments.forEach(function(instrument){
                    instrument.inCart = false;
                })
                this.myCart = [];
            },
            addNewItem:function(){
                this.card.push({
                    name: this.nameInput,
                    type: this.typeInput,
                    brand: this.brandInput
                }),
                    this.addForm=!this.addForm;
            },
            display: function(){
                this.addForm=!this.addForm;
            },
            inputInfo: function(){
                this.nameInfo="";
                this.typeInfo="";
                this.brandInfo="";
                this.noImage="";
                this.addInfo=!this.addInfo
            }

        }
    }
)
