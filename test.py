# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution(object):
    def returnListInt(_, ll):
        result = []
        while ll.next:
            result.insert(0, "{}".format(ll.val))
            ll = ll.next

        result.insert(0, "{}".format(ll.val))
        return "".join(result)

    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        v1 = self.returnListInt(l1)
        v2 = self.returnListInt(l2)
        v3 = list("{}".format(int(v1) + int(v2)))
        result = None
        for i in range(len(v3)):
            result = ListNode(int(v3[i]), result)

        return result