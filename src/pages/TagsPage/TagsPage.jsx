import './TagsPage.css';
import * as tagsAPI from '../../utilities/tags-api';
import TagsList from '../../components/TagsList/TagsList'
import NewTagForm from '../../components/NewTagForm/NewTagForm'
import { useEffect, useState } from 'react';

export default function TagsPage({tags, handleAddTag}) {
  
  return (
    <main>
      <h1>TagsPage</h1>
      <main className="flex-ctr-ctr">
        <TagsList tags={tags} />
        <NewTagForm handleAddTag={handleAddTag}/>
      </main>
    </main>
  );
  }