{
	"user_ratings"= [
		{
			"user_id": 1,
			"ratings": [
				{
					"movie_id": 2,
					"ratings": 4
				},
				{
					"movie_id": 2,
					"ratings": 5
				},
				{
					"movie_id": 3,
					"ratings": 1
				},
				{
					"movie_id": 5,
					"ratings": 3
				}
			]
		},
		{
			"user_id": 2,
			"ratings": [
				{
					"movie_id": 4,
					"ratings": 4
				},
				{
					"movie_id": 2,
					"ratings": 5
				}
			]
		},
	]
}

/*void DeleteEmployee(char* s,trie* g_head,employee* root){
	employee* H,*H1,*K,*S,*boss;
  char w[10];
	H=find_in_trie(s,g_head);
  if(H==NULL){
    printf("No such employee\n");
    return;
  }
	H1=H->same_level;
	K=H->sub_level;

  if(K==NULL){
    g_head=delete_in_trie(H->name,g_head,H->name[0],0);
    delete_in_boss(root,H);
    root=delete_in_list(root,H);
  }
  else
	if(K!=NULL){
    if(H1!=NULL){

         S=H1->sub_level;
         if(S==NULL){
          H1->sub_level=K;
        }
        else{
         while(S->same_level!=NULL)
           S=S->same_level;
         S->same_level=K;
       }
         H->sub_level=NULL;
         delete_in_boss(root,H);
         root=delete_in_list(root,H);
         g_head=delete_in_trie(H->name,g_head,H->name[0],0);

    }
    else{
      printf("Cant be deleted \n");
    }

  }


  employee* level(int n,employee* root)
{
    employee* current,*sub;
    current=root;
    while(current!=NULL)
    {
        if(current->level==n)
            return current;
        sub=current->sub_level;
        if(sub->level==n)
            return sub;
        current=current->next;
    }
}
void LowestBoss(char* S,char* S1,trie* g_head,employee* root)
{
    employee* S_node,*S1_node,*K,*B_node,*B1_node;
    /*finding the nodes of the S and S1 from the trie
    S_node=find_in_trie(S,g_head);
    S1_node=find_in_trie(S1,g_head);

    /*there is no boss for root
    if(S1_node==root || S_node==root)
    {
        printf("No Common boss \n");
        return;
    }

    /*finding their immediate boss
    B_node=find_boss(root,S_node);
    B1_node=find_boss(root,S1_node);
    
    /*finding which has lower level and printing it's boss
    employee* min ;
    min = S_node->level > S1_node->level ? B1_node: B_node;
    printf("Lowest Common Boss - %s %d\n",min->name,min->level );
    

}*/

}*/

import java.io.*; 
	  
// A test class whose objects are cloned 
class Test 
{ 
    int x, y; 
    Test() 
    { 
        x = 10; 
        y = 20; 
    } 
} 
  
// Driver Class 
class Main 
{ 
    public static void main(String[] args) 
    { 
         Test ob1 = new Test(); 
  
         System.out.println(ob1.x + " " + ob1.y); 
  
         // Creating a new reference variable ob2 
         // pointing to same address as ob1 
         Test ob2 = ob1; 
  
         // Any change made in ob2 will be reflected 
         // in ob1 
         ob2.x = 100; 
  
         System.out.println(ob1.x+" "+ob1.y); 
         System.out.println(ob2.x+" "+ob2.y); 
    } 
} 
