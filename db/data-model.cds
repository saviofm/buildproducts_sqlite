using {
  cuid,
  managed,
  sap,
  temporal,
  Currency,
  User
} from '@sap/cds/common';


namespace productstrainning;

//----------------------- PRODUCTS  ---------------------//
//------------------------------------------------------//
//------------------------------------------------------//
//Entity
entity Products : cuid , managed {
      EAN : String;
      productName : String;
      productDescription : String;
      brand : String;
      obs: LargeString;
      image: LargeString;
}


@cds.odata.valuelist
//Annotation
annotate Products with @(
  title              : '{i18n>Products}',
  description        : '{i18n>Products}',
  UI.TextArrangement : #TextOnly,
  Common.SemanticKey : [EAN],
  UI.Identification  : [{
    $Type : 'UI.DataField',
    Value : EAN
  }]
) {
  ID @(
        Core.Computed,
        Common.Text : {
            $value                 : EAN,
            ![@UI.TextArrangement] : #TextOnly
        }
  );
  EAN            @(
    title       : '{i18n>EAN}',
    description : '{i18n>EAN}',
    Common      : {
        FieldControl             : #Mandatory,
    //  Text : {
    //    $value                 : productDescription,
    //    ![@UI.TextArrangement] : #TextLast
    //  }
    }
  );
  productName @(
    title       : '{i18n>productName}',
    description : '{i18n>productName}',
    Common      : {
      FieldControl : #Mandatory,
      TextFor      : EAN
    }
  );
  productDescription @(
    title       : '{i18n>productDescription}',
    description : '{i18n>productDescription}',
  );
  brand @(
    title       : '{i18n>brand}',
    description : '{i18n>brand}',
  );
  obs @(
    title       : '{i18n>obs}',
    description : '{i18n>obs}',
    UI.MultiLineText: true,
  );
  image @(
    title       : '{i18n>imageContent}',
    description : '{i18n>imageContent}',
  );
};

