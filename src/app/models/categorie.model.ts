export interface Categorie{
  icon        : string,
  image       : string,
  name        : string,
  title_list  : string,
  url         : string,
  view        : Number
}

export interface SubCategorie{
  name        :string,
  title_list  : string,
}

export interface TileNameView{
  title_list  : string,
  data        : SubCategorie[]
}
