import { Button, Htag, Paragraph, Rating } from "@/components";
import { withLayout } from "@/layout/layout";
import React, { useState } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";

function Home({menu, firstCategory}: HomeProps) {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(0)
  return(
      <>
        <Htag tag="h1">{counter}</Htag>
        <Button appearance="primary" arrow="right" onClick={() => setCounter(x => x+1)}>Кнопка</Button>
        <Button appearance="ghost">Кнопка</Button>
        <Paragraph size="L">Ghost</Paragraph>
        <Paragraph size="S">Ghost</Paragraph>
        <Rating rating={rating} isEditable={true} setRating={setRating}></Rating>
        <ul>
        {menu.map(m => <li key={m._id.secondCategory}>{m._id.secondCategory}</li>)}
        </ul>
      </>

  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',{ firstCategory })
  return{
      props:{
          menu,
          firstCategory
      }
  }
}

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[],
  firstCategory: number,
}