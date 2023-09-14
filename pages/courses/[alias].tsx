import { withLayout } from "@/layout/layout";
import React, { useState } from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";
import { TopPageModel } from "@/interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "@/interfaces/product.interface";

function Course({menu,page, products}: CourseProps) {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(0)
  return(
      <>
        
      </>

  );
}

export default withLayout(Course);

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if(!params){
    return{
      notFound: true
    }
  }
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',{ firstCategory })
  const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias' + params.alias)
  const { data: products } = await axios.post <ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
    category: page.category,
    limit: 10
  })
  return{
      props:{
          menu,
          firstCategory,
          page,
          products
      }
  }
}


interface CourseProps extends Record<string, unknown>{
  menu: MenuItem[],
  firstCategory: number,
  page: TopPageModel,
  products: ProductModel[]
}