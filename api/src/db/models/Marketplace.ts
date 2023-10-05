import { Item } from '@/types/marketplace.types';
import { db } from "../mongo";

export const Items = db!.collection<Item>('items')
