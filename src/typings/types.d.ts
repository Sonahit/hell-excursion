export type FeedbackItem = {
  name: string,
  paragraphs: Array<string>,
  img: {
    src: string,
    alt: string
  }
}


export interface FeedbackList extends Array<FeedbackItem> {}


declare module "*.png";
